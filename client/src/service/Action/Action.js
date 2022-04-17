const homeActionCreator =() => async(dispatch,getState)=>{
	dispatch({type : "Request"});
	try {
		const response = await fetch("/home");

		if(response.status === 200){
			dispatch({type : "LOGIN",payload : true});
		}else{
			dispatch({type : "LOGOUT",payload : false});
		}
		
	} catch (error) {
		dispatch({type : "ERROR",payload : error.message})
	}
}

const logInActionCreator = ()=>{

	return{
		type : "LOGIN",payload : true
	}
}

const logOutActionCreator = ()=>{

	return{
		type : "LOGIN",payload : false
	}
}

export {homeActionCreator,logInActionCreator,logOutActionCreator};