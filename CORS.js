// СORS (Cross-Origin Resource Sharing - совместное использование ресурсами между разными источниками) - это механизм, позволяющий веб-страницам запрашивать ресурсы с другого домена, отличного от того с которого была загружена сама страница. 
// По умолчанию все веб-браузеры ограничивают кросс-доменные запросы с использованием так называемой политики одного источника (Same-Origin Policy), которая предотвращает отправку запросов с других доменов. 
// Он предоставляет веб-серверам возможность явно разрешить некоторые кросс-доменные запросы, сохраняя при этом безопасность.

// Когда веб приложение пытается сделать запрос к ресурсу, который находиться на другом домене (кросс-доменный запрос), браузер автоматически добавляет к запросу заголовок 'Origin'. 
// Этот заголовок содержит информацию о домене и порте, на котором веб-страница была загружена.
// Веб-сервер, к которому направлен запрос, затем проверяет этот заголовок и решает, разрешить ли запрос. 
// Если сервер разрешает запросы из этого источника, он отвечает с соответствующими CORS-заголовками, указывающими, какие действия разрешены.
// Один из таких заголовков - Access-Control-Allow-Origin, который может быть установлен в * (что означает разрешение для всех доменов) или в конкретный домен.

// Access-Control-Allow-Origin: Указывает, какие источники могут получать доступ к ресурсу (например * для всех доменов).
// Access-Control-Allow-Methods: Указывает, какие HTTP-методы разрешены для кросс-доменных запросов (например, GET, POST, OPTIONS, PUT, DELETE).
// Access-Control-Allow-Headers: Указывает, какие заголовки могут быть использованы в запросе.
// Access-Control-Allow-Credentials: Указывает, разрешено ли использование учётных данных (например cookies) в кросс-доменных запросах.

// Хотя он повышает безопасность, неправильная настройка CORS может привести к уязвимостям. Например, слишком широкое использование Access-Control-Allow-Origin * может разрешить небезопасные кросс-доменные запросы.
// Разработчики должны тщательно настраивать политику CORS, чтобы предотвратить уязвимости.