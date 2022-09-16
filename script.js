const button = document.querySelector('button')

button.addEventListener('click', () => {
    Notification.requestPermission().then((perm) => {
        if (perm === 'granted') {
            const notification = new Notification('Example notification here', {
                body: Math.random(),
                data: {
                    hello: 'Hello World.!'
                },
                icon: './apple-touch-icon.png',
                tag: 'Welcome Message.'
            })
        }
    })
})

// if loose focus the tab
let notification, interval;
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        const leaveTime = new Date()

        interval = setInterval(() => {
            notification = new Notification('Come Back plz', {
                body: `You have been gone for ${Math.round(
                    (new Date() - leaveTime) / 1000
                )} seconds.`,
                icon: './apple-touch-icon.png',
                tag: 'Come back'
            })
        }, 100)
    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})