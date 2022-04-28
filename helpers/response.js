
function make( code = 200 , message = '', data = null ) {
    return {
        code: code,
        message: message,
        data: data
    };
}

module.exports = {
    make
}

