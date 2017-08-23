import React from 'react';

class UserAdd extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            name :'',
            age : 0,
            gender : ''
        }
    }
    handleSUbmit(e){
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }

    handleChange(field,value,type){
        if(type){
            value = +value;
        }
        this.setState({
            [field] : value
        })
    }
    render(){
        const {name,age,gender} = this.state;
        return (
            <div>
                <header>
                    <h1>添加用户</h1>
                </header>

                <main>
                <form onSubmit={(e)=>{this.handleSUbmit(e)}}>
                    <label>用户名：</label>
                    <input type="text" value={name} onChange={(e)=>{this.handleChange('name',e.target.value)}} />
                    <br/>
                    <label>年&nbsp;&nbsp;&nbsp;龄：</label>
                    <input type="number" value={age} onChange={(e)=>{this.handleChange('age',e.target.value,'number')}}  />
                    <br/>
                    <label>性&nbsp;&nbsp;&nbsp;别：</label>
                    <select value={gender} onChange={(e)=>{this.handleChange('gender',e.target.value)}} >
                    <option value="">请选择</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
                </main>
            </div>
        )
    }
}

export default UserAdd;