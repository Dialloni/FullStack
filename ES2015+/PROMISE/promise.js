navigator.geolocation.getCurrentPosition(

    (position) => {
        console.log(
            `user position is at ${position.coords.latitude}, ${position.coords.longitude}` 
        );
    },
    () => {
        console.log('unable to locate user');
    }
);
