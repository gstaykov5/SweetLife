function btns(params) {
    document.querySelector('.button').addEventListener('click', showGinfo);
    const gHiddenEls = document.querySelector('#gHidden');
    
    document.querySelector('.tButton').addEventListener('click', showTinfo);
    const tHiddenEls = document.querySelector('#tHidden');

    function showGinfo(e) {
        if (gHiddenEls.style.display === 'block') {
            tHiddenEls.style.display = 'none'
            gHiddenEls.style.display = 'none';
        } else {
            tHiddenEls.style.display = 'none'
            gHiddenEls.style.display = 'block';
        }
    }

    function showTinfo(e) {
        if (tHiddenEls.style.display === 'block') {
            gHiddenEls.style.display = 'none';
            tHiddenEls.style.display = 'none'
        } else {
            gHiddenEls.style.display = 'none';
            tHiddenEls.style.display = 'block'
        }
    }
}

btns()