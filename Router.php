<?php

namespace MVC;

class Router
{

    public $rutasGET = [];
    public $rutasPOST = [];

    public function get($url, $fn)
    {
        $this->rutasGET[$url] = $fn;
    }

    public function comprobarRutas()
    {
        $urlActual = $_SERVER['PATH_INFO'] ?? '/';
        $metodo = $_SERVER['REQUEST_METHOD'];

        if ($metodo === 'GET') {
            $fn = $this->rutasGET[$urlActual] ?? null;
        }

        if ($fn) {
            //La URL existe y hay una funcion asociada
            call_user_func($fn, $this); //Permite llamar una funcion cuando no sabemos como se llama

        } else {
            //La URL no existe. 404
            echo '404';
        }
    }

    //Muestra una vista
    public function render($view) {
        include __DIR__ . "/views/$view.php";
    }
}
