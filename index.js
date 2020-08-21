function shadowizard(options) {
    
    // get all elements with classname shadowWizard
    var images = document.querySelectorAll('.shadowizard');

    // if hard provided to shadowX prop, shadowX will be 0px
    if (options.shadowX === 'hard') {
        options.shadowX = '0px';
    } else 
        options.shadowX = '15px'; // 15px to shadowX if not hard

    images.forEach((image, index) => {

        // set a box shadow to each image
        image.style.boxShadow = `10px 10px ${options.shadowX} 1px rgba(0, 0, 0, 0.12)`;

        // set padding is true
        if (options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowizard = shadowizard;