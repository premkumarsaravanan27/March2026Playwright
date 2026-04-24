import { test, expect } from '@playwright/test'

test("handling table", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //No of columns and rows
    const columns = table.locator('thead tr th');
    console.log('Number of columns:', await columns.count());

    const rows = table.locator('tbody tr');
    console.log('Number of rows:', await rows.count());
    //assertions to check it
    await expect(columns).toHaveCount(4);
    await expect(rows).toHaveCount(5);

    // ✅ Method 1 (single selection)
    const matchedRow = rows.filter({
        hasText: 'Smartwatch'
    });

    await matchedRow.first().locator("input[type='checkbox']").check();
    await page.waitForTimeout(5000)

   // ✅ Method 2 (Reusable function)
    await selectProduct(rows, page, "Smartphone");
    await selectProduct(rows, page, "Laptop");
    await selectProduct(rows, page, "Tablet");



         // 4) Print all product details using loop

for (let i = 0; i < await rows.count(); i++) {

    const row = rows.nth(i); // ✅ current row

    const tds = row.locator('td'); // ✅ cells inside this row

    for (let j = 0; j < await tds.count(); j++) {

        const text = await tds.nth(j).textContent(); // ✅ correct

        console.log(text);
    }
}
// ✅ reusable function

async function selectProduct(rows, page, name) {

    const matchedRow = rows.filter({
        hasText: name
    });

    if (await matchedRow.count() > 0) {
        await matchedRow.first().locator("input[type='checkbox']").check();
    } else {
        console.log(`Product not found: ${name}`);
    


}}})




