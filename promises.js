const promises = new Promise(function(resolve, reject) {
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }
    // Эмуляция асинхронной операции, например, запроса к серверу
    setTimeout(() => {
        // Условие успешного выполнения операции
        if(backendData.status === 'working') {
            resolve(backendData)
        }
        // Условие отклонённого выполнения операции
        reject('Error')
    })
}).then(data => {
    
})