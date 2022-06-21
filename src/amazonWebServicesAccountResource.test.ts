import { NewAmazonWebServicesAccount } from "./amazonWebServicesAccountResource";
import { NewSensitiveValue } from "./propertyValueResource";

describe("amazon web services account", () => {
    test("NewAmazonWebServicesAccount with empty input parameters", async () => {
        const accessKey = " ";
        const name = " ";
        const secretKey = NewSensitiveValue(" ");

        const account = NewAmazonWebServicesAccount(name, accessKey, secretKey);

        expect(account).not.toBeNull();
        expect(account.AccessKey).toEqual(accessKey);
        expect(account.Name).toEqual(name);
        expect(account.SecretKey).toEqual(secretKey);
    });

    test("NewAmazonWebServicesAccount with valid input parameters", async () => {
        const accessKey = "access-key";
        const name = "name";
        const secretKey = NewSensitiveValue("value");

        const account = NewAmazonWebServicesAccount(name, accessKey, secretKey);

        expect(account).not.toBeNull();
        expect(account.AccessKey).toEqual(accessKey);
        expect(account.Name).toEqual(name);
        expect(account.SecretKey).toEqual(secretKey);
    });
});
