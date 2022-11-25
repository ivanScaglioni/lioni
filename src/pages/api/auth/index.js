import { SignJWT, jwtVerify } from 'jose';
import { serialize } from 'cookie';

export default async (req, res) => {



    const { method, body } = req;
    const { authorization } = req.headers;


    switch (method) {
        case "GET":
            if (!authorization) return res.status(401);
            try {
                const encoder = new TextEncoder();
                const jwtData = await jwtVerify(authorization, encoder.encode(process.env.PRIVATE_KEY))
                return res.status(200).json({ jwtData })
            } catch (error) {
                return res.status(401).json({ msg: "invalid token" });
            }
        case "POST":
            try {
                
                const data = await JSON.parse(body);
                if (data != process.env.PRIVATE_PASSWORD) return res.status(401).json({ msg: "CHUPALA" });
                const jwtConstructor = new SignJWT({ name: 'ivan', role: 'GOD' });
                const encoder = new TextEncoder();
                const jwt = await jwtConstructor
                    .setProtectedHeader({ alg: 'HS256', type: 'JWT' })
                    .setIssuedAt()
                    .setExpirationTime('12h')
                    .sign(encoder.encode(process.env.PRIVATE_KEY));
                const serialized = serialize('authorization', jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 1000 * 60 * 60 * 12,
                    path: '/'
                })

                res.setHeader('Set-Cookie', serialized);
                return res.status(200).json('login succesfull');
            } catch (error) {
                return res.status(401).json({ msg: "invalid password" });
            }

        case 'DELETE':
            if (!authorization) return res.status(401).json({ error: 'no token' });
            try {
                const encoder = new TextEncoder();
                const jwtData = await jwtVerify(authorization, encoder.encode(process.env.PRIVATE_KEY))
                const serialized = serialize('authorization', null, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 0,
                    path: '/'
                });
                res.setHeader('Set-Cookie', serialized);
                return res.status(200).json('logout succesfully');
            } catch (error) {
                return res.status(401).json({ msg: "invalid token" });
            }

        default:
            return res.status(400).json({ msg: "this method is not supported" });


    }


};