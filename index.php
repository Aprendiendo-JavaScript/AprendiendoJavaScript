<!DOCTYPE html>
<html>
<head>
	<title>Pagina Principal</title>
	<link rel="stylesheet" href="css/stylejs.css">
	
	
</head>
<body id="cuerpo">
	<div class="contenedor">
		<?php include("estructura/cabecera.html") ?>
		<div class="contenido">
			<div class="principal">	
				<h1>INSCRIPCION MATERIA</h1><br>
				<form name="form1" id="miformulario" autocomplete="off">
					<input type="text" placeholder="Nombre completo" id="nombre" require="">
					<input type="email" placeholder="Email" id="email" require="">
					<input type="text" placeholder="Materia" id="materia" require="">
					<input type="submit" value="Solicitar Cita" id="enviar">
					<div class="resultado"></div>
				</form>
			</div>
		</div>
	</div>
	<script src="js/formulario.js"></script>
</body>
</html>