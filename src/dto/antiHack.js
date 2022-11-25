const arrHack = ['<script>', '</script>', '<script/>', '<', '>', '/']

export async function myAntiHack(str) {

    let bool = false;
    for (let index = 0; index < arrHack.length; index++) {

        bool = str.toLowerCase().includes(arrHack[index]);
        if (bool) break;


    }
    return (bool);
}


