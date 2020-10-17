import { loader } from "../loader";

test("loader должен возвращать строку", async () => {
  const response = await loader();
  const result ='{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  await expect(response).toBe(result);
});