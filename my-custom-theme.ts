
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "system-ui",
		"--theme-font-family-heading": "system-ui",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8EA604 
		"--color-primary-50": "238 242 217", // #eef2d9
		"--color-primary-100": "232 237 205", // #e8edcd
		"--color-primary-200": "227 233 192", // #e3e9c0
		"--color-primary-300": "210 219 155", // #d2db9b
		"--color-primary-400": "176 193 79", // #b0c14f
		"--color-primary-500": "142 166 4", // #8EA604
		"--color-primary-600": "128 149 4", // #809504
		"--color-primary-700": "107 125 3", // #6b7d03
		"--color-primary-800": "85 100 2", // #556402
		"--color-primary-900": "70 81 2", // #465102
		// secondary | #3083DC 
		"--color-secondary-50": "224 236 250", // #e0ecfa
		"--color-secondary-100": "214 230 248", // #d6e6f8
		"--color-secondary-200": "203 224 246", // #cbe0f6
		"--color-secondary-300": "172 205 241", // #accdf1
		"--color-secondary-400": "110 168 231", // #6ea8e7
		"--color-secondary-500": "48 131 220", // #3083DC
		"--color-secondary-600": "43 118 198", // #2b76c6
		"--color-secondary-700": "36 98 165", // #2462a5
		"--color-secondary-800": "29 79 132", // #1d4f84
		"--color-secondary-900": "24 64 108", // #18406c
		// tertiary | #DBE9EE 
		"--color-tertiary-50": "250 252 252", // #fafcfc
		"--color-tertiary-100": "248 251 252", // #f8fbfc
		"--color-tertiary-200": "246 250 251", // #f6fafb
		"--color-tertiary-300": "241 246 248", // #f1f6f8
		"--color-tertiary-400": "230 240 243", // #e6f0f3
		"--color-tertiary-500": "219 233 238", // #DBE9EE
		"--color-tertiary-600": "197 210 214", // #c5d2d6
		"--color-tertiary-700": "164 175 179", // #a4afb3
		"--color-tertiary-800": "131 140 143", // #838c8f
		"--color-tertiary-900": "107 114 117", // #6b7275
		// success | #26d94a 
		"--color-success-50": "222 249 228", // #def9e4
		"--color-success-100": "212 247 219", // #d4f7db
		"--color-success-200": "201 246 210", // #c9f6d2
		"--color-success-300": "168 240 183", // #a8f0b7
		"--color-success-400": "103 228 128", // #67e480
		"--color-success-500": "38 217 74", // #26d94a
		"--color-success-600": "34 195 67", // #22c343
		"--color-success-700": "29 163 56", // #1da338
		"--color-success-800": "23 130 44", // #17822c
		"--color-success-900": "19 106 36", // #136a24
		// warning | #d6d926 
		"--color-warning-50": "249 249 222", // #f9f9de
		"--color-warning-100": "247 247 212", // #f7f7d4
		"--color-warning-200": "245 246 201", // #f5f6c9
		"--color-warning-300": "239 240 168", // #eff0a8
		"--color-warning-400": "226 228 103", // #e2e467
		"--color-warning-500": "214 217 38", // #d6d926
		"--color-warning-600": "193 195 34", // #c1c322
		"--color-warning-700": "161 163 29", // #a1a31d
		"--color-warning-800": "128 130 23", // #808217
		"--color-warning-900": "105 106 19", // #696a13
		// error | #D7263D 
		"--color-error-50": "249 222 226", // #f9dee2
		"--color-error-100": "247 212 216", // #f7d4d8
		"--color-error-200": "245 201 207", // #f5c9cf
		"--color-error-300": "239 168 177", // #efa8b1
		"--color-error-400": "227 103 119", // #e36777
		"--color-error-500": "215 38 61", // #D7263D
		"--color-error-600": "194 34 55", // #c22237
		"--color-error-700": "161 29 46", // #a11d2e
		"--color-error-800": "129 23 37", // #811725
		"--color-error-900": "105 19 30", // #69131e
		// surface | #110B11 
		"--color-surface-50": "219 218 219", // #dbdadb
		"--color-surface-100": "207 206 207", // #cfcecf
		"--color-surface-200": "196 194 196", // #c4c2c4
		"--color-surface-300": "160 157 160", // #a09da0
		"--color-surface-400": "88 84 88", // #585458
		"--color-surface-500": "17 11 17", // #110B11
		"--color-surface-600": "15 10 15", // #0f0a0f
		"--color-surface-700": "13 8 13", // #0d080d
		"--color-surface-800": "10 7 10", // #0a070a
		"--color-surface-900": "8 5 8", // #080508
		
	}
}