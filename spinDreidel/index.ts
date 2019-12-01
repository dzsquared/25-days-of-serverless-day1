import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { dreidel } from "./dreidel";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let dNumber: number = getDreidelResult();
    let dreidelObject = new dreidel(dNumber);
    console.log("random number generated: "+ dNumber.toString());
    if (dreidelObject) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: dreidelObject
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Dreidel spun off table, please try again."
        };
    }
};

export default httpTrigger;



function getDreidelResult():number {
    let dNumber:number = Math.floor(Math.random() * 4) + 1;

    return dNumber;
}
