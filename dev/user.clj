(ns user
  (:require [leiningen.core.main :as lein]
            [clojure.java.io :as io]

            [ring.util.http-response :refer [ok content-type header] :as resp]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.nested-params :refer [wrap-nested-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [bidi.ring :as br]
            [ring.util.response :refer (file-response url-response response)]
            [org.httpkit.server :as httpkit]

            ;;[bidi.ring :refer (make-handler)]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api]]
            [ring.middleware.reload :as reload]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]))

;; trying to use juxt/bidi
;; (def routes
;;   ["/" {"index.html" ::home-page-handler
;;         "" (br/resources-maybe {:prefix "resources/public"})}])

;; (def handlers
;;   {::home-page-handler (fn [req]
;;                          (->
;;                           (io/resource "index.html")
;;                           (slurp)
;;                           (ok))
;;                          ;;(response "Hello world!")
;;                          )})

;; ;; (def http-handler (br/make-handler routes handlers))
;; (def http-handler (br/make-handler routes
;;                   (some-fn handlers
;;                            #(when (fn? %) %))))


;; using compojure
(defroutes routes
  (resources "/")
  (GET "/*" req (io/resource "index.html")))

(def http-handler (reload/wrap-reload (api #'routes)))

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
