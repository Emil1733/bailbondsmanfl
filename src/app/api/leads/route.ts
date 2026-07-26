import { NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        // Basic validation
        if (!body.name || !body.phone) {
            return NextResponse.json(
                { error: 'Name and Phone are required fields.' },
                { status: 400 }
            );
        }

        // Insert into Turso via Drizzle
        const newLead = await db.insert(leads).values({
            name: body.name,
            phone: body.phone,
            jailLocation: body.jailLocation || null,
            inquiryType: body.inquiryType || 'general_bail',
            notes: body.notes || null,
            status: 'new'
        }).returning();

        return NextResponse.json({ success: true, lead: newLead[0] }, { status: 201 });
    } catch (error) {
        console.error("Failed to insert lead:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
