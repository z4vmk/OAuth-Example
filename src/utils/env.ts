// Dotenv
import env from "env-var";

// Export Env
export default {
    app: {
        PORT: env.get("PORT").asPortNumber() || 3000,
        BASE_URL: env.get("BASE_URL").required().asString(),
        ENCRYPTION_SECRET: env.get("ENCRYPTION_SECRET").required().asString(),
        JWT_SECRET: env.get("JWT_SECRET").required().asString(),
    },

    discord: {
        DISCORD_CLIENT_ID: env.get("DISCORD_CLIENT_ID").required().asString(),
        DISCORD_CLIENT_SECRET: env
            .get("DISCORD_CLIENT_SECRET")
            .required()
            .asString(),
    },
};
