<!doctype html>
<html lang="{{str_replace('_','-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf_token" value="{{csrf_token()}}">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <link rel="stylesheet" href="{{mix('css/app.css')}}" type="text/css">
    <title>Crud</title>
</head>
<body>

<div id="app">

</div>

<script src="{{mix('js/app.js')}}" type="text/javascript"></script>
</body>
</html>
