function test(num: number): void {
    console.log(num);
    console.log({
        ...{ demo: 1 }
    });
}

test(1);
export default test;