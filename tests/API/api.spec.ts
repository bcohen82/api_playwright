import { test, expect } from "@playwright/test"
import { RequestPage } from '../../page_object/RequestPage'


test.describe.parallel("Api testing", () => {
    let requestPage: RequestPage


    let authentication = {
        'x-pyy-authorization': 'JWT eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0MzI2MTAsInR5cGUiOiJwYXBheWEiLCJvcmdJZHMiOlsxMTUxOTddfSwicGVybWlzc2lvbkNvbnRleHQiOnsib3JnSWQiOjExNTE5NywicHJvamVjdElkIjoxNDM2NzV9LCJpYXQiOjE2NDY1NTc5MjcsImV4cCI6MTY0NjYwMTEyN30.lwQRaDkQmSarYYq9P1OKVl3anKVgZnOcEUf9S1OOZpO2BB5xfAh_Zqu6lJUBZ1NoSaLd9TZBFkIMTyJ70fViXw',
        'cookie': 'connect.sid=s:z_QIcg6JHRA3EPfbG4o4boicZ-r1Tb8C.O8tQAzXia4RIUDDcQjGiI3S8n6z9PM9tgeuPkoQMMls'
    }
    test.only("Open BI weekly project", async({ request }) => {
        const response = await request.get("/api/v1/dashboard-project?timestamp=1646217413179", {
            headers: authentication
        })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody[0].id)
    })

    test("Open BI weekly project", async({ request }) => {
        let resp = await RequestPage.openProject("/api/v1/dashboard-project?timestamp=1646217413179", authentication, request)
        console.log(resp[0].id)
    })


    // test("create worker", async ({ request }) => {
    //     let data = {"id":0,"bankDetails":[{"id":0,"accountName":null,"accountNumber":null,"bankName":null,"branch":null,"swift":null,"iban":null,"workerId":null}],"contactId":0,"contact":{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":"boaztest","lastName":"test","middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-primary","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}],"email":"","date":""},"contacts":[{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":null,"lastName":null,"middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-emergency","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}]},{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":null,"lastName":null,"middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-manager","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}]}],"contracts":[{"id":0,"currencyId":null,"fullTimeHours":null,"currency":{"id":"aed","name":null,"symbol":null},"contractType":null,"endDate":null,"extensionPeriodType":null,"extensionPeriodValue":null,"seniorityStart":"2022-03-03T00:00:00Z","hiringDate":"2022-03-03T00:00:00Z","jobTitle":null,"paidVacation":null,"payments":[],"costPlanItems":[],"projectId":143675,"project":{},"terms":[],"sickDays":null,"holidays":null,"terminationNotice":null,"workerId":null,"worker":null,"costPlanTerms":[]}],"children":[],"dateOfBirth":null,"employerTaxes":[],"files":[],"gender":null,"healthInsuranceIssuedAt":null,"healthInsuranceExpirationDate":null,"identities":[{"id":0,"expirationDate":null,"placeOfIssue":null,"number":null,"type":"passport","file":null}],"imageId":null,"image":null,"maritalStatus":null,"nationality":null,"permits":[{"id":0,"expirationDate":null,"issuedAt":null,"permitNumber":null,"permitScanId":null,"type":null,"workerId":0,"permitScan":null}],"projects":[],"proposalItems":[],"spouseName":null,"user":null}

    //     const response = await request.post("/api/v1/org/115197/project/143675/worker?timestamp=1646296357412", {
    //         headers: authentication,
    //         data: data
    //     })
    //     const responseBody = JSON.parse(await response.text())
    //     console.log(responseBody)
    // })

    test("create new worker", async ({ request }) => {
        let data = {"id":0,"bankDetails":[{"id":0,"accountName":null,"accountNumber":null,"bankName":null,"branch":null,"swift":null,"iban":null,"workerId":null}],"contactId":0,"contact":{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":"boaztest3","lastName":"test","middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-primary","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}],"email":"","date":""},"contacts":[{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":null,"lastName":null,"middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-emergency","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}]},{"id":0,"ownerOrg":null,"ownerUser":null,"firstName":null,"lastName":null,"middleName":null,"emails":[],"skype":null,"linkedIn":null,"phone":null,"type":"worker-manager","jobTitle":null,"title":null,"addresses":[{"id":0,"contact":null,"contactId":0,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}]}],"contracts":[{"id":0,"currencyId":null,"fullTimeHours":null,"currency":{"id":"aed","name":null,"symbol":null},"contractType":null,"endDate":null,"extensionPeriodType":null,"extensionPeriodValue":null,"seniorityStart":"2022-03-03T00:00:00Z","hiringDate":"2022-03-03T00:00:00Z","jobTitle":null,"paidVacation":null,"payments":[],"costPlanItems":[],"projectId":143675,"project":{},"terms":[],"sickDays":null,"holidays":null,"terminationNotice":null,"workerId":null,"worker":null,"costPlanTerms":[]}],"children":[],"dateOfBirth":null,"employerTaxes":[],"files":[],"gender":null,"healthInsuranceIssuedAt":null,"healthInsuranceExpirationDate":null,"identities":[{"id":0,"expirationDate":null,"placeOfIssue":null,"number":null,"type":"passport","file":null}],"imageId":null,"image":null,"maritalStatus":null,"nationality":null,"permits":[{"id":0,"expirationDate":null,"issuedAt":null,"permitNumber":null,"permitScanId":null,"type":null,"workerId":0,"permitScan":null}],"projects":[],"proposalItems":[],"spouseName":null,"user":null}
        let resp = await RequestPage.createWorker("/api/v1/org/115197/project/143675/worker?timestamp=1646296357412", authentication, data, request)
        console.log(resp)
    })

    test("update worker info", async({ request }) => {
        let data = {"worker":{"spouseName":null,"permitsIds":[],"filesIds":[],"gender":null,"contactsIds":[471195,471196,471195],"maritalStatus":null,"userId":null,"paymentsIds":[],"updatedAt":"2022-03-03T15:16:47.000Z","imageId":null,"contractsIds":[456263],"dateOfBirth":null,"id":446550,"createdAt":"2022-03-03T15:16:47.000Z","contactId":471194,"healthInsuranceExpirationDate":null,"nationality":null,"healthInsuranceIssuedAt":null,"identitiesIds":[],"photoUrl":null,"children":[],"contacts":[{"middleName":"","lastName":"","emailsIds":[],"preferredName":null,"phone":null,"updatedAt":"2022-03-03T15:16:47.000Z","skype":null,"addressesIds":[],"title":null,"type":"worker-emergency","jobTitle":null,"id":471195,"createdAt":"2022-03-03T15:16:47.000Z","firstName":"","relation":null,"linkedIn":null,"addresses":[{"id":0,"contact":null,"contactId":471195,"countryId":null,"country":null,"city":null,"province":null,"addressLine1":null,"addressLine2":null,"subdivisionId":null,"zipCode":null,"postalCode":null,"type":"home"}],"emails":[]}],"contact":{"middleName":"","lastName":"test","emailsIds":[],"preferredName":null,"phone":null,"updatedAt":"2022-03-03T15:16:47.000Z","skype":null,"addressesIds":[11170],"title":null,"type":"worker-primary","jobTitle":null,"id":471194,"createdAt":"2022-03-03T15:16:47.000Z","firstName":"boaztest5","relation":null,"linkedIn":null,"addresses":[{"subdivisionId":null,"addressLine1":null,"addressLine2":null,"city":null,"zipCode":null,"updatedAt":"2022-03-03T15:16:47.000Z","province":null,"state":null,"countryId":null,"country":null,"postalCode":null,"type":"home","id":11170,"createdAt":"2022-03-03T15:16:47.000Z","contactId":471194}],"emails":[]},"identities":[{"workerId":446550,"expirationDate":null,"file":null}],"permits":[{"workerId":446550,"expirationDate":null,"issuedAt":null,"permitScan":null}]}}
        let resp = await RequestPage.updateWorker("/api/v1/org/115197/project/143675/worker/446550?timestamp=1646548429072", authentication, data, request)
    })
})



