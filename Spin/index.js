module.exports = async function (context) {  
    context.log('JavaScript HTTP trigger function processed a request.');
    // נ (Nun), ג (Gimmel), ה (Hay), and ש (Shin)
    var num = Math.floor(Math.random() * 3);
    var values = ['ג','ה','ש','נ']
        context.res = {
            body: values[num]
             // status: 200, /* Defaults to 200 */
        };
   
};