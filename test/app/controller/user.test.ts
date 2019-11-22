import { app, assert } from 'midway-mock/bootstrap';
it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
    // const ctx = app.mockContext({});
    // await ctx.service.xx();
});

/* tslint:enable */
describe('测试用户的增删改查', () => {
    it('查看所有用户getUsersAll', () => {
        return app.httpRequest()
            .get('/user/getUsersAll')
            .expect([])
            .expect(200);
    });
    it('根据id查找用户', () => {
        return app.httpRequest()
            .get('/user/getUsersAll')
            .expect([])
            .expect(200);
    });
});
