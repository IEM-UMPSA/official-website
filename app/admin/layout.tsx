"use client"

import { readUserSession } from "@/lib/userSession";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import AdminLoading from "./loading";  

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [sessionExists, setSessionExists] = useState(false);

    useEffect(() => {
        const fetchUserSession = async () => {
            try {
                const { data: userSession } = await readUserSession();
                if (userSession.session) {
                    setSessionExists(true);
                } else {
                    redirect("/auth");
                }
            } catch (error) {
                console.error("Error fetching user session:", error); 
                // Handle error, e.g., show error message or redirect to error page
            } finally {
                setLoading(false);
            }
        };

        fetchUserSession();
    }, []);

    if (loading) {
        // Render loading state, e.g., spinner or loading message
        return <AdminLoading />;
    }

    if (!sessionExists) {
        // Redirect to authentication page if session does not exist
        redirect("/auth");
        // Return null to prevent rendering anything else
        return null;
    }

    return (
        <div className={`flex w-full min-h-screen `}>
            {children}
        </div>
    );
};
