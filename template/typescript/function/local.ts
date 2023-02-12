import handler from "./handler"

(async () => {
    console.log(
        await handler({
            body: "",
            headers: {},
            method: "",
            query: {},
            path: "",
        }, {
            status (value: any) { console.log(value); return this },
            headers (value: any) { console.log(value); return this },
            succeed(value: any) { console.log(value); },
            fail(value: any) { console.log(value); }, 
        })
    )
})();
