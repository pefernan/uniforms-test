import React from 'react';

import GuestSchema from './GuestSchema';
import AutoForm from "uniforms-semantic/AutoForm";

export default function GuestForm() {
    return <AutoForm schema={GuestSchema} onSubmit={console.log} />;
}