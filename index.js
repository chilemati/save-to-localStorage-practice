let arr = [
    {
        id: 1,
        title: 'css',
        body: '100 words'
    },
    {
        id: 2,
        title: 'scss',
        body: '100 words'
    },
    {
        id: 3,
        title: 'sass',
        body: '100 words'
    },
    {
        id: 4,
        title: 'html',
        body: '100 words'
    },
    {
        id: 5,
        title: 'javascript',
        body: '100 words'
    },
    {
        id: 6,
        title: 'react',
        body: '100 words'
    },
]

function saveToLocalstroage(key,value,override) {
    if(typeof key != "string") {
        throw Error('key must be a string but got ' + typeof key)
    }
    if(key === undefined || value === undefined) {
        throw Error('expected two argument but got one. example: saveToLocalstroage(key,value)')

    }
    if(localStorage.getItem(key) != null) {
       
        if(!(override===undefined || override === false)) {
            // by default override is true. to make it false pass true 
            console.log('this key already exist')
            return;
        }
    }
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalstroage(key) {
    let result = JSON.parse(localStorage.getItem(key));
    if(result === null) {
        console.log('wrong key');
        return null;
    }
   return result ;
}
function removeFromLocalstroage(key) {
   return localStorage.removeItem(key);
}

function removeFromLocalstroageAfter(key,time) {
    // time in seconds
    if(typeof key != 'string') {
        throw Error('first argument must be a string')
    }
    if(typeof time != 'number') {
        throw Error('second argument must be a number in seconds')
    }
    setTimeout(() => {
        console.log(`${key} deleted after ${time*1000 || 5000} seconds `)
        return localStorage.removeItem(key);
    }, time* 1000 || 10000);
    
}

function convertToMili(time) {
    if(typeof time != 'string') {
        throw Error('time must be a string')
    }
    if(typeof time == 'number' || !isNaN(time)) {
        return Number(time) * 1000;
    }
    if(time.charAt(time.length-1) === 's' ) {
        // extract number from string
        let num = Number(time.split('s')[0]);
        // convertTo 
        return num * 1000;
    }else if(time.charAt(time.length-1) === 'm' ) {
       // extract number from string
       let num = Number(time.split('m')[0]);
       // convertTo 
       return num * 1000 * 60;

    }else if(time.charAt(time.length-1) === 'h' ) {
        // extract number from string
        let num = Number(time.split('h')[0]);
        // convertTo 
        return num * 1000 * 60 * 60;
    }else if(time.charAt(time.length-1) === 'd') {
        // extract number from string
        let num = Number(time.split('d')[0]);
        // convertTo 
        return num * 1000 * 60 * 60 * 24;

    }else{
        throw Error('wrong time format: expected time format is: 1,1s,1m,1h,1d');
    }
}


// removeFromLocalstroage('lastname')
saveToLocalstroage('data',arr,false)
console.log(getFromLocalstroage('data'))
getFromLocalstroage('data').map(each=> {
    console.log(each)
})

removeFromLocalstroageAfter('data',20);
console.log(convertToMili('1.5d'))

let d = new Date();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
console.log(new Date(1726851630729))
console.log()

