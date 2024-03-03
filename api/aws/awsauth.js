const{
    S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  ListObjectsV2Command,
  paginateListObjectsV2,
  GetObjectCommand
}=require('@aws-sdk/client-s3');

const client= new S3Client({
    region: 'us-east-Asia Pacific (Mumbai) ap-south-1',
    credentials: {
        accessKeyId: 'AKIASL7YL2NB27C47Z6C', 
        secretAccessKey: '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' 
    },
   
})


 const  putobject=async(key)=>{
    const object =new PutObjectCommand({
        Bucket:'projects98',
        Key:key
    });

    await client.send(object);
    

}

 const getObject=async(key)=>{
    const object = new GetObjectCommand({
        Bucket:'projects98',
        Key:key
    })
    const url=await client.send(object);

    return url;
}


 const Alllist=async()=>{
    const list= new ListObjectsV2Command({
        Bucket:'projects98'
    })
    const data=await client.send(list);
    return data;
}


 const deleteobect=async(key)=>{
   const object=new DeleteObjectCommand({
     Bucket:'projects98',
    Key:key
   })
}
