const fs = require("fs").promises;
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise(resolve => {
        rl.question(question, resolve)
    });
}

async function filemanager() {

    while (true) {
        console.log("\tMenu");
        console.log("1. Creating a file");
        console.log("2. Read the file");
        console.log("3. Append file");
        console.log("4. Rename File");
        console.log("5. Delete File");
        console.log("6. Exit");

        choice = await getInput("Enter your choice");

        switch (choice) {

            case "1": {
                const name = await getInput("Enter file name :: ");
                const content = await getInput("Enter file content :: ");

                await fs.writeFile(name, content);
                console.log("File created successfully");
                break;

            }

            case "2": {
                const name = await getInput("Enter file name :: ");
                const data = await fs.readFile(name, "utf-8");
                console.log("File content :: " + "\n" + data);
                break;
            }

            case "3": {
                const name = await getInput("Enter file name :: ");
                const content = await getInput("Enter file content :: ");

                await fs.appendFile(name, "\n" + content);
                console.log("File content appended successfuly");
                break;
            }

            case "4": {
                const name = await getInput("Enter file name :: ");
                const newname = await getInput("Enter new name :: ");

                await fs.rename(name, newname);
                console.log("renamed");
                break;
            }

            case "5": {
                const name = await getInput("Enter file name :: ");

                await fs.unlink(name);
                console.log("Deleted");
                break;
            }

            case "6": {
                console.log("Exiting ...");
                rl.close();
                return;
            }

            default: console.log("Invalid choice, try again");
        }

    }

}

filemanager()