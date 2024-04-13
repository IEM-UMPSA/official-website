import React from "react";
import AuthForm from "./components/AuthForm";
import { readUserSession } from "@/lib/userSession";
import { redirect } from "next/navigation";

export default async function page() {
	const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/admin");
	}
	return (
		<div className="flex items-center justify-center h-screen">
			<AuthForm />
		</div>
	);
}