module.exports = {
    getUserName(users, name){
        var index = users.findIndex(u=> u.toLowerCase() == name.toLowerCase());
        let nu=name;
 		if(index >= 0) { 
 			let nu = name+ (Math.floor(Math.random()*999 )+1).toFixed('000');
 
			
		}
		return nu;	
    }
}