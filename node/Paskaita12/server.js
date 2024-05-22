

import pg from "pg"
import dotenv from "dotenv"

dotenv.config();


const config = {
    user: "avnadmin",
    password: "AVNS_WEcdALh1FLRBZkJBL-F",
    host: "pg-13d30eb3-rimasskv-c995.d.aivencloud.com",
    port: 15857,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUKHNAUPetigLr7vpdu42J9E3TWo0wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYzUzNTBiZjItZjIyZi00YzUyLWFiMDktNmU3YmI1Nzc0
ZjY1IFByb2plY3QgQ0EwHhcNMjQwNTIxMTUwNjMwWhcNMzQwNTE5MTUwNjMwWjA6
MTgwNgYDVQQDDC9jNTM1MGJmMi1mMjJmLTRjNTItYWIwOS02ZTdiYjU3NzRmNjUg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAOInCHIw
sl8YR0KcpuXMWFnEpuyOf9s6fzvnAFC6qrmOtxQCbfoNRqo69tGcdUpGx2WM04Z8
2TXzKL2LG6BimoXV1cegLBaI6ustEnEC0EtW9e03P0nKfKJMyskFGD4yNyhcu/nT
5WVqne9vWWPhs9/I0P0+0iAa6lYJBkY+4miKqYOjrLIZh+Gi77Qt6JfpmAYBLE9j
eqfVM6TvmRWzRZ8fe4rAgzVIdn4cIiQJDgOEKbkjdSucTS7XHPOL+3kZFDoodnMI
xBSrce4al/QYyglERe8Kb82SaiiQxBUGY+nzassb56KpFYzaICFVCiibjTKzL02I
G3sfLoNLxLjyjWOclFu5vHb3Qvc0xH+UfN53jXX5B08qbWai0yW/aiFwCkGfXELS
6gJcmAGfqzdoaNn5i9jiir06eHS+R082gtcs/kINHooHXok/jShx5wr5US2KM9Pd
cbWlXuTII0lVjT72TCYOuboVqn3AZg1MAVnpp0v86PZ9RFoSzMzrnAQRXQIDAQAB
oz8wPTAdBgNVHQ4EFgQUroNgOMtXtGIrFKIUHm6zS8GyahcwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEgvC0+4yxbJFCWM
jGRP+2i36O0xxTe+lp392BdsB1AP3p+YFDHRydPSpTfHXdzOAShryVlTYnRVs1Yw
Lz2JYHEy4iDAkl5UwkjPeTLTYt/8Y9Jc+vShBG5J1f+cqj7W8xA9PKx8aZB7uSV2
E8eVtSeKkexx6U5UaSsp0ie+RqIfml0WxrMWEOqEQR4gTFGnqQ9CIOP94b+dOvkH
kG4gnJ+wGwODVbcT5PeSNXbvUlRyvzYnt7t7GbTk2w4cHiOCM3Z5FeJMiLemuS6h
tomNlvWNVxxFqhmi+ISJ0+DytumWAAkLTo9K0/vZVtrhD6tSdwsSHGUQyRzAeK+9
c0KBdeaemqHbEkZSIvG+7oOlwC7AIAAs+XpL0B1b0A+4S//MGXsboMCEBq9cJd0Q
1gCeddEHCT2XRpPhfliuKaaO3aDbd+EsiV/62zoBIY22Iz5X/GZB4q7ltkjSUphg
Qv0TW3A2xod5UpAt8v3sxU+i+HrtdxOGNFdHGuMJe2IBnoFrig==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});
 const{ rows} = await client.query("select * from users")
 console.log(rows);