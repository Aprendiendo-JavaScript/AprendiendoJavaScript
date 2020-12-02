<!DOCTYPE html>
<html>
<head>
	<title>Pagina Principal</title>
	<link rel="stylesheet" href="css/stylejs.css">
	<script src="js/formulario.js"></script>
	
</head>
<body id="cuerpo">
	<div class="contenedor">
		<?php include("estructura/cabecera.html") ?>
		<div class="contenido">
			<div class="principal">	

				<form name="form1" id="miformulario">
					<input type="text" placeholder="Nombre completo" id="nombre">
					<input type="text" placeholder="Email" id="email">
					<input type="text" placeholder="Materia" id="materia">
					<input type="submit" value="Solicitar Cita" id="btn-enviar">
					
				</form>

			</div>
		</div>
	</div>
</body>
</html>