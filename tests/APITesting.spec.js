const { test, expect } = require('@playwright/test')

//test('Mock GET/POST response', async ({ page }) => {
//    //  1) Mock the API

//     await page.route('https://jsonplaceholder.typicode.com/posts/', async route => {
//        await route.fulfill({
//        status:400,
//            contentType: ' application/json',
//            body: JSON.stringify({ title: "Mocked Post", id: 1 })
//         });
//   });

//    // 2) Open the page that calls the API

//    await page.goto('https://jsonplaceholder.typicode.com/posts/');

//     // 3) Validate the fake data

//  const text = await page.locator('body').innerText();
//  await expect(text).toContain('Mocked Post');




//1) GET    -> Fetch all Post

test('GET : Fetch all posts', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total post fetched :", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST - Create a new post with data

test('POST : Create a new post', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "Learing Playwright Automation",
            body: "This was recently created in this URl",
            userId: 121
        }
    });

    expect(response.status()).toBe(201); // Created
    const body = await response.json();
    console.log("Created Post ID : ", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Learing Playwright Automation');
});

// 3) PUT   -> Update an existing post fully

test('PUT : Update a post with new data', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: "This is API Automation",
            body: "This Post was recently updated",
            uderId: 121
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("Upadted Post Title:", body.title);
    expect(body.title).toBe('This is API Automation');
});

// 4) DELETE   -> Delete a Post

test('DELETE : Delete a post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("Post deleted successfully");
    
});