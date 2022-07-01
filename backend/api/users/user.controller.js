const {create,login, userDetails, getUsername,getuser,update_user, getuserByemail}=require("./user.service")

const {genSaltSync,hashSync}=require("bcrypt");
module.exports={
    createUser:(req,res)=>
    {
        const body=req.body;
        // const salt=genSaltSync(10);
        // body.password=hashSync("bikey",salt);

        create(body,(err,results)=>
        {
            if(err)
            {
                console.log(err)
                return res.status(500).json(
                    {
                        success:0,
                        message:'Database connection error'
                    }
                )

                // return body;
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })


    },
    loginUser:(req,res)=>
    {
        const body=req.body;
        login(body,(err,results)=>
        {
            console.log(results)
if(err)
{
    console.log(err);
}
if(!results)
{
    return res.json({
        success:0,
        data:"Invalid Email or Password"
    })
}

if(body.password===results.password)
{
    return res.json({
        success:1,
        data:"Login Successful"
    })
}
else
{
    return res.json({
        success:0,
        data:"Invalid Email or Password"
    })
}
        })
    },


    createUserDetails:(req,res)=>
    {
        const body=req.body;

        userDetails(body,(err,results)=>
        {
            if(err)
            {
                console.log(err)
                return res.status(500).json(
                    {
                        success:0,
                        message:'Database connection error'
                    }
                )
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })


    },

    creategetuser:(req,res)=>
    {
        const email=req.body.email;
        console.log(req.body)
        getUsername(email,(err,results)=>
        {
            if(err)
            {
                console.log(err)
                return res.status(500).json(
                    {
                        success:0,
                        message:'Database connection error'
                    }
                )
            }
            return res.status(200).json({
                success:1,
                data:results[0]
            })
        })


    },
  // get userinfo for profile
  creategetuserinfo:(req,res)=>
  {
    const id=req.body.id;
    getuser(id,(err,results)=>
    {
      if(err)
      {
        console.log(err)
        return res.status(500).json(
          {
            success:0,
            message:'Database connection error'
          }
        )
      }
      return res.status(200).json({
        success:1,
        data:results[0]
      })
    })


  },
  // Get user by email
  getusebyemail:(req,res)=>
  {
    const email=req.body.email;
    getuserByemail(email,(err,results)=>
    {
      if(err)
      {
        console.log(err)
        return res.status(500).json(
          {
            success:0,
            message:'Database connection error'
          }
        )
      }
      return res.status(200).json({
        success:1,
        data:results[0]
      })
    })


  },
// Update user profile
  updateuserinfo:(req,res)=>
  {
    const req_data=req.body;
    const data={
        id:req_data.id,
        username:req_data.username,
        age:req_data.age,
        weight:req_data.weight,
        email:req_data.email,
        image:req.file.path,
    }
    update_user(data,(err,results)=>
    {
      if(err)
      {
        console.log(err)
        return res.status(500).json(
          {
            success:0,
            message:'Database connection error'
          }
        )
      }
      return res.status(200).json({
        success:1,
        message:"Successfully Updated"
      })
    })


  }

}