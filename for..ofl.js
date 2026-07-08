const testUser = ['alice@test.com','bob@test.com','carlo@test.com'];

for (const email of testUser){
    console.log('testing login for: ${email}');
    //in a real test:await loginpage.login(email,password);
}

//testing login for:alice@test.com
//testing login for:bob@test.com
//testing login for:carlo@test.com

//array

const testUsers = ['admin@test.com', 'admin2@test.com','admin3@test.com'];
for (const email of testUsers){
    console.log('testing login for: ${email}');
    //in a real test:await loginpage.login(email,password);
}
