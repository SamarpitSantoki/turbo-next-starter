"use client";
import { vars } from "nativewind";

export const config = {
  light: vars({
    "--color-primary-0": "229 252 254",
    "--color-primary-50": "220 251 253",
    "--color-primary-100": "212 250 253",
    "--color-primary-200": "195 248 252",
    "--color-primary-300": "178 245 251",
    "--color-primary-400": "161 243 250",
    "--color-primary-500": "85 233 242",
    "--color-primary-600": "68 186 194",
    "--color-primary-700": "51 140 145",
    "--color-primary-800": "34 93 97",
    "--color-primary-900": "22 61 63",
    "--color-primary-950": "11 31 32",

    /* Secondary  */
    "--color-secondary-0": "238 238 241",
    "--color-secondary-50": "232 233 237",
    "--color-secondary-100": "227 228 234",
    "--color-secondary-200": "216 218 227",
    "--color-secondary-300": "205 208 220",
    "--color-secondary-400": "194 198 214",
    "--color-secondary-500": "73 77 103",
    "--color-secondary-600": "59 62 82",
    "--color-secondary-700": "44 46 62",
    "--color-secondary-800": "29 31 41",
    "--color-secondary-900": "20 21 28",
    "--color-secondary-950": "10 10 14",

    /* Tertiary */
    "--color-tertiary-0": "255 250 245",
    "--color-tertiary-50": "255 242 229",
    "--color-tertiary-100": "255 233 213",
    "--color-tertiary-200": "254 209 170",
    "--color-tertiary-300": "253 180 116",
    "--color-tertiary-400": "251 157 75",
    "--color-tertiary-500": "231 129 40",
    "--color-tertiary-600": "215 117 31",
    "--color-tertiary-700": "180 98 26",
    "--color-tertiary-800": "130 73 23",
    "--color-tertiary-900": "108 61 19",
    "--color-tertiary-950": "84 49 18",

    /* Error */
    "--color-error-0": "254 233 233",
    "--color-error-50": "254 226 226",
    "--color-error-100": "254 202 202",
    "--color-error-200": "252 165 165",
    "--color-error-300": "248 113 113",
    "--color-error-400": "239 68 68",
    "--color-error-500": "230 53 53",
    "--color-error-600": "220 38 38",
    "--color-error-700": "185 28 28",
    "--color-error-800": "153 27 27",
    "--color-error-900": "127 29 29",
    "--color-error-950": "83 19 19",

    /* Success */
    "--color-success-0": "228 255 244",
    "--color-success-50": "202 255 232",
    "--color-success-100": "162 241 192",
    "--color-success-200": "132 211 162",
    "--color-success-300": "102 181 132",
    "--color-success-400": "72 151 102",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "27 50 36",

    /* Warning */
    "--color-warning-0": "255 253 251",
    "--color-warning-50": "255 249 245",
    "--color-warning-100": "255 231 213",
    "--color-warning-200": "254 205 170",
    "--color-warning-300": "253 173 116",
    "--color-warning-400": "251 149 75",
    "--color-warning-500": "231 120 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",
    "--color-warning-950": "84 45 18",

    /* Info */
    "--color-info-0": "236 248 254",
    "--color-info-50": "199 235 252",
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",

    /* Typography */
    "--color-typography-0": "254 254 255",
    "--color-typography-50": "245 245 245",
    "--color-typography-100": "229 229 229",
    "--color-typography-200": "219 219 220",
    "--color-typography-300": "212 212 212",
    "--color-typography-400": "163 163 163",
    "--color-typography-500": "140 140 140",
    "--color-typography-600": "115 115 115",
    "--color-typography-700": "82 82 82",
    "--color-typography-800": "64 64 64",
    "--color-typography-900": "38 38 39",
    "--color-typography-950": "23 23 23",

    /* Outline */
    "--color-outline-0": "253 254 254",
    "--color-outline-50": "243 243 243",
    "--color-outline-100": "230 230 230",
    "--color-outline-200": "221 220 219",
    "--color-outline-300": "211 211 211",
    "--color-outline-400": "165 163 163",
    "--color-outline-500": "140 141 141",
    "--color-outline-600": "115 116 116",
    "--color-outline-700": "83 82 82",
    "--color-outline-800": "65 65 65",
    "--color-outline-900": "39 38 36",
    "--color-outline-950": "26 23 23",

    /* Background */
    "--color-background-0": "255 255 255",
    "--color-background-50": "246 246 246",
    "--color-background-100": "242 241 241",
    "--color-background-200": "220 219 219",
    "--color-background-300": "213 212 212",
    "--color-background-400": "162 163 163",
    "--color-background-500": "142 142 142",
    "--color-background-600": "116 116 116",
    "--color-background-700": "83 82 82",
    "--color-background-800": "65 64 64",
    "--color-background-900": "39 38 37",
    "--color-background-950": "24 23 24",

    /* Background Special */
    "--color-background-error": "254 241 241",
    "--color-background-warning": "255 244 235",
    "--color-background-success": "237 252 242",
    "--color-background-muted": "247 248 247",
    "--color-background-info": "235 248 254",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "55 55 55",
    "--color-indicator-info": "83 153 236",
    "--color-indicator-error": "185 28 28",
  }),
  dark: vars({
    "--color-primary-0": "0 30 32",
    "--color-primary-50": "0 38 40",
    "--color-primary-100": "0 47 49",
    "--color-primary-200": "0 64 67",
    "--color-primary-300": "0 81 84",
    "--color-primary-400": "0 98 102",
    "--color-primary-500": "85 233 242",
    "--color-primary-600": "170 240 246",
    "--color-primary-700": "195 248 252",
    "--color-primary-800": "212 250 253",
    "--color-primary-900": "220 251 253",
    "--color-primary-950": "229 252 254",

    /* Secondary  */
    "--color-secondary-0": "0 0 0",
    "--color-secondary-50": "10 10 14",
    "--color-secondary-100": "20 21 28",
    "--color-secondary-200": "29 31 41",
    "--color-secondary-300": "44 46 62",
    "--color-secondary-400": "59 62 82",
    "--color-secondary-500": "73 77 103",
    "--color-secondary-600": "194 198 214",
    "--color-secondary-700": "216 218 227",
    "--color-secondary-800": "227 228 234",
    "--color-secondary-900": "232 233 237",
    "--color-secondary-950": "238 238 241",

    /* Tertiary */
    "--color-tertiary-0": "84 49 18",
    "--color-tertiary-50": "108 61 19",
    "--color-tertiary-100": "130 73 23",
    "--color-tertiary-200": "180 98 26",
    "--color-tertiary-300": "215 117 31",
    "--color-tertiary-400": "231 129 40",
    "--color-tertiary-500": "251 157 75",
    "--color-tertiary-600": "253 180 116",
    "--color-tertiary-700": "254 209 170",
    "--color-tertiary-800": "255 233 213",
    "--color-tertiary-900": "255 242 229",
    "--color-tertiary-950": "255 250 245",

    /* Error */
    "--color-error-0": "83 19 19",
    "--color-error-50": "127 29 29",
    "--color-error-100": "153 27 27",
    "--color-error-200": "185 28 28",
    "--color-error-300": "220 38 38",
    "--color-error-400": "230 53 53",
    "--color-error-500": "239 68 68",
    "--color-error-600": "248 113 113",
    "--color-error-700": "252 165 165",
    "--color-error-800": "254 202 202",
    "--color-error-900": "254 226 226",
    "--color-error-950": "254 233 233",

    /* Success */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",

    /* Warning */
    "--color-warning-0": "84 45 18",
    "--color-warning-50": "108 56 19",
    "--color-warning-100": "130 68 23",
    "--color-warning-200": "180 90 26",
    "--color-warning-300": "215 108 31",
    "--color-warning-400": "231 120 40",
    "--color-warning-500": "251 149 75",
    "--color-warning-600": "253 173 116",
    "--color-warning-700": "254 205 170",
    "--color-warning-800": "255 231 213",
    "--color-warning-900": "255 249 245",
    "--color-warning-950": "255 253 251",

    /* Info */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",

    /* Typography */
    "--color-typography-0": "23 23 23",
    "--color-typography-50": "38 38 39",
    "--color-typography-100": "64 64 64",
    "--color-typography-200": "82 82 82",
    "--color-typography-300": "115 115 115",
    "--color-typography-400": "140 140 140",
    "--color-typography-500": "163 163 163",
    "--color-typography-600": "212 212 212",
    "--color-typography-700": "219 219 220",
    "--color-typography-800": "229 229 229",
    "--color-typography-900": "245 245 245",
    "--color-typography-950": "254 254 255",

    /* Outline */
    "--color-outline-0": "26 23 23",
    "--color-outline-50": "39 38 36",
    "--color-outline-100": "65 65 65",
    "--color-outline-200": "83 82 82",
    "--color-outline-300": "115 116 116",
    "--color-outline-400": "140 141 141",
    "--color-outline-500": "165 163 163",
    "--color-outline-600": "211 211 211",
    "--color-outline-700": "221 220 219",
    "--color-outline-800": "230 230 230",
    "--color-outline-900": "243 243 243",
    "--color-outline-950": "253 254 254",

    /* Background */
    "--color-background-0": "24 24 27",
    "--color-background-50": "28 28 32",
    "--color-background-100": "36 36 41",
    "--color-background-200": "45 45 52",
    "--color-background-300": "63 63 71",
    "--color-background-400": "82 82 91",
    "--color-background-500": "113 113 122",
    "--color-background-600": "161 161 170",
    "--color-background-700": "212 212 216",
    "--color-background-800": "228 228 231",
    "--color-background-900": "244 244 245",
    "--color-background-950": "250 250 250",

    /* Background Special */
    "--color-background-error": "66 43 43",
    "--color-background-warning": "65 47 35",
    "--color-background-success": "28 43 33",
    "--color-background-muted": "51 51 51",
    "--color-background-info": "26 40 46",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "247 247 247",
    "--color-indicator-info": "161 199 245",
    "--color-indicator-error": "232 70 69",
  }),
};