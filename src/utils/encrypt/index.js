// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {RSA} from 'react-native-rsa-native';

let publickKey = null;
let privateKey = null;

export const generateKeys = () =>
    RSA.generateKeys(4096).then((keys) => {
        publickKey = keys.public;
        privateKey = keys.private;
    });

export const messageEncrypt = async (msg) => {
    // TEMP for test
    RSA.generateKeys(4096).then((keys) => {
        publickKey = keys.public;
        privateKey = keys.private;
    });

    return RSA.encrypt(msg, publickKey);
};

export const messageDecrypt = (msg) => {
    if (!privateKey) {
        return msg;
    }

    return RSA.decrypt(msg, privateKey);
};
