(ns cljs.user
  (:require [datascript-todo :as todo]
            [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (todo/render)))

(todo/render)
