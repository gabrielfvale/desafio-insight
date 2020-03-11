const { API_OLHO_VIVO_VERSAO } = process.env;

module.exports = {
    getApiVersion(_, res) {
        res.json({
            sptransVersion: `v${API_OLHO_VIVO_VERSAO}`
        });
    }
};
