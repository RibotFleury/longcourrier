import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { prenom, nom, email, telephone, service, message } = body

  try {
    await resend.emails.send({
      from: 'LongCourrier <contact@lclongcourrier.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nouveau message de ${prenom} ${nom} – ${service}`,
      html: `
        <h2>Nouveau message depuis le site LongCourrier</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || 'Non renseigné'}</p>
        <p><strong>Service :</strong> ${service}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}