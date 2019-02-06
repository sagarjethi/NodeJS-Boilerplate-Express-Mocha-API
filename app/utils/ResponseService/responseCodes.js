//  TODO: move this status codes to separate file
module.exports.codes = {
    CONTINUE: [100, 'Continue'],
    SWITCHING_PROTOCOLS: [101, 'SWITCHING_PROTOCOLS'],
    OK: [200, 'OK'],
    CREATED: [201, 'CREATED'],
    ACCEPTED: [202, 'ACCEPTED'],
    NON_AUTHORITATIVE_INFORMATION: [203, 'NON_AUTHORITATIVE_INFORMATION'],
    NO_CONTENT: [204, 'NO_CONTENT'],
    RESET_CONTENT: [205, 'RESET_CONTENT'],
    PARTIAL_CONTENT: [206, 'PARTIAL_CONTENT'],
    MULTITPLE_CHOICES: [300, 'MULTITPLE_CHOICES'],
    MOVED_PERMAMENTLY: [301, 'MOVED_PERMAMENTLY'],
    FOUND: [302, 'FOUND'],
    SEE_OTHER: [303, 'SEE_OTHER'],
    NOT_MODIFIED: [304, 'NOT_MODIFIED'],
    USE_PROXY: [305, 'USE_PROXY'],
    TEMPORARY_REDIRECT: [307, 'TEMPORARY_REDIRECT'],
    BAD_REQUEST: [400, 'BAD_REQUEST'],
    UNAUTHORIZED: [401, 'UNAUTHORIZED'],
    PAYMENT_REQUIRED: [402, 'PAYMENT_REQUIRED'],
    FORBIDDEN: [403, 'FORBIDDEN'],
    NOT_FOUND: [404, 'NOT_FOUND'],
    METHOD_NOT_ALLOWED: [405, 'METHOD_NOT_ALLOWED'],
    NOT_ACCEPTABLE: [406, 'NOT_ACCEPTABLE'],
    PROXY_AUTHENTICATION_REQUIRED: [407, 'PROXY_AUTHENTICATION_REQUIRED'],
    REQUEST_TIMEOUT: [408, 'REQUEST_TIMEOUT'],
    CONFLICT: [409, 'CONFLICT'],
    GONE: [410, 'GONE'],
    LENGTH_REQUIRED: [411, 'LENGTH_REQUIRED'],
    PRECONDITION_FAILED: [412, 'PRECONDITION_FAILED'],
    REQUEST_ENTITY_TOO_LARGE: [413, 'REQUEST_ENTITY_TOO_LARGE'],
    REQUEST_URI_TOO_LONG: [414, 'REQUEST_URI_TOO_LONG'],
    UNSUPPORTED_MEDIA_TYPE: [415, 'UNSUPPORTED_MEDIA_TYPE'],
    REQUESTED_RANGE_NOT_SATISFIABLE: [416, 'REQUESTED_RANGE_NOT_SATISFIABLE'],
    EXPECTATION_FAILED: [417, 'EXPECTATION_FAILED'],
    ACCOUNT_NOT_ACCESSIBLE: [418, 'Could not connect to peer account'],
    FAILURE: [500, 'Parameter missing / Invalid Operation / Internal Server Error'],
    INVALID_HEADERS: [501, 'Invalid authentication headers'],
    SESSION_EXPIRED: [502, 'You session has timed out'],
    UNATHORISED_ACCESS: [503, 'You are not authorized to perform this operation'],
    INVALID_CREDS: [504, 'Invalid login details'],
    ACCOUNT_BLOCKED: [505, 'Your account is blocked'],
    EMAIL_NOT_SENT: [506, 'Your registration/password reset email was not sent'],
    INVALID_TOKEN: [507, 'Your token is invalid'],
    OLD_PASSWORD_INVALID: [508, 'Your old password is wrong'],
    EMAIL_EXISTS: [509, 'This email already exists'],
    INVALID_USER: [510, 'The user is invalid'],
    IMAGE_SIZE_INVALID: [511, 'Invalid image size'],
    NO_DATA_FOUND: [512, 'No data found'],
    PEER_ACCOUNT_ALREADY_EXISTS: [513, 'This account is already connected'],
    TOKEN_REQUIRED: [514, 'Your token is invalid'],

};
