(ns user
  (:require [leiningen.core.main :as lein]
            [clojure.java.io :as io]

            [ring.util.http-response :refer [ok content-type header] :as resp]
            [ring.middleware.format :refer [wrap-restful-format]]
            [bidi.ring :as br]
            [environ.core :refer [env]]
            [org.httpkit.server :as httpkit]))

;; trying to use juxt/bidi
;; With help from Malcom Sparks (author of bidi)
;; https://groups.google.com/d/msg/clojure/JNcU8Fhfz8Q/CxcZ-Zf35ZAJ
(def routes
  ["" [
       ["/index.html" :index]
       ["" (br/resources {:prefix "public"})]
       ]])
;; (def routes
;;   ["/" {"index.html" ::home-page-handler
;;         "" (br/resources-maybe {:prefix "resources/public"})}])

(def handlers
  {:index (fn [req]
            (->
             (io/resource "index.html")
             (slurp)
             (ok)))})

;; (def http-handler (br/make-handler routes handlers))
;; see: https://github.com/juxt/bidi/issues/39
;; for explanation for below
(def http-handler (br/make-handler routes
                  (some-fn handlers
                           #(when (fn? %) %))))


;; using compojure
;; (defroutes routes
;;   (resources "/")
;;   (GET "/*" req (io/resource "index.html")))

;; (def http-handler (reload/wrap-reload (api #'routes)))

(defn run [& [port]]
  (defonce ^:private server
    (let [port (Integer. (or port (env :port) 10555))]
      (print "Starting web server on port" port ".\n")
      (httpkit/run-server (var http-handler) {:port port, :join? false})

      ;; (run-jetty http-handler {:port port
      ;;                          :join? false})
      ))
  server)

(defn start-figwheel []
  (future
    (print "Starting figwheel.\n")
    (lein/-main ["figwheel"])))

(defn -main [& [port]]
  (run port))
