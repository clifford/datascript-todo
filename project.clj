(defproject datascript-todo "0.1.0"
  :global-vars  {*warn-on-reflection* true}

  :source-paths ["src" "dev"]

  :dependencies [
    [org.clojure/clojure "1.7.0-alpha4"]
    [org.clojure/clojurescript "0.0-2411"]
    [datascript "0.7.1"]
    [sablono "0.2.22"]
    [com.facebook/react "0.11.2"]
    [com.cognitect/transit-cljs "0.8.194"]
    [ring "1.3.1"]
    [compojure "1.2.0"]
    [figwheel "0.2.0-SNAPSHOT"]
    [environ "1.0.0"]
    [leiningen "2.5.0"]
  ]

  :min-lein-version "2.5.0"

  :plugins [
    [cider/cider-nrepl "0.8.0-SNAPSHOT"]
            [lein-cljsbuild "1.0.3"]
            [lein-environ "1.0.0"]
            [lein-figwheel "0.2.0-SNAPSHOT"]
  ]

  :figwheel {:http-server-root "public"
             :port 3449}

  :cljsbuild {
    :builds [
      { :id "release"
        :source-paths  ["src"]
        :compiler {
          :externs       ["react/externs/react.js"]
          :output-to     "web/todo.min.js"
          :optimizations :advanced
          :pretty-print  false
        }}
  ]}

  :profiles {
    :dev {
      :cljsbuild {
        :builds [
          { :id "dev"
            :source-paths  ["src" "dev"]
            :compiler {
              :output-to     "resources/public/js/todo.js"
              :output-dir    "resources/public/js/out"
              :source-map    "resources/public/js/out.js.map"
              :optimizations :none
            }}
      ]}
    }
  }
)
