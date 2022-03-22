const counter = document.querySelectorAll('.counter');

counter.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetcount = +counter.getAttribute('data-target');
        // console.log(targetcount);
        const startingCount = Number(counter.innerHTML);

        const incr = targetcount / 100;

        if(startingCount < targetcount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHTML = targetcount; 
        }
    }

    updateCounter();
})