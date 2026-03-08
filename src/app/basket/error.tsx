"use client";

import ErrorComponent from "@/shared/ui/error/error";

export default function Error({ error }: { error: Error }) {
    return <ErrorComponent error={error} />;
}
