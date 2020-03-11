const { API_OLHO_VIVO_VERSAO } = process.env;

module.exports = {
    getHomePage(_, res) {
        res.json({
            status: 'running'
        });
    },
    getApiVersion(_, res) {
        res.json({
            sptransVersion: `v${API_OLHO_VIVO_VERSAO}`
        });
    }
};