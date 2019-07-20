setInterval(() => {
    new Promise((resolve, reject) => {
        window.scrollTo(0,document.body.scrollHeight);
        
        setTimeout(() => {
            resolve()
        }, 3000)
    }).then(() => {
        document.querySelectorAll('.Comment .kCxZdn ._2pFdCpgBihIaYh9DSMWBIu:last-child').forEach(el => {
            el.click()
            document.querySelector('button._2LNy1r5iuFMrf0PLh4UdV-:nth-child(3) > span:nth-child(2)').click()
            document.querySelector('._17UyTSs2atqnKg9dIq5ERg').click()
        })
        
        // Posts Deleter
        // document.querySelectorAll('.Post button._2pFdCpgBihIaYh9DSMWBIu').forEach(el => {
        //     new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             el.click()
        //             document.querySelector('button._1muOrgIRB6t41qDocDiXul:nth-last-child(4)').click()
        //             resolve()
        //         }, 1000)
        //     }).then(() => {
        //         document.querySelector('._17UyTSs2atqnKg9dIq5ERg').click()
        //     })
        // })
    })
}, 500)
