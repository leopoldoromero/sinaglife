import { ReactNode } from "react";
import DepartmentsWrapper from "../components/StoreDepartmentsPage";

export default async function SubDepartments({
    params,
}: {
    params: { departmentName: string }
}): Promise<ReactNode> {
    const { departmentName } = await params;

    return (<DepartmentsWrapper departmentName={departmentName}/>);
  }
  