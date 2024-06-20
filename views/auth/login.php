<main class="contenedor seccion contenido-centrado">
    <h1>Iniciar Sesión</h1>

    <?php foreach ($errores as $error) :?>
        <div class="alerta error">
            <?php echo $error; ?>
        </div>
    <?php endforeach; ?>

    <form action="/login" class="formulario" method="POST">
    <fieldset>
        <legend>Email y Password</legend>

        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Tu Email" id="email">

        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Tu Password" id="password">
    </fieldset>

    <input type="submit" name="" id="" value="Iniciar Sesión" class="boton boton-verde">
    </form>
</main>