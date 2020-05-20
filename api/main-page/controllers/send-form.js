module.exports = {
  index: async ctx => {
    const { name, email, message } = ctx.request.body;

    // await strapi.plugins['email'].services.email.send({
    //   to: 'afloode@gmail.com',
    //   from: email,
    //   subject: `Меседж с главной от ${name}`,
    //   text: message
    // });
    await strapi.plugins['email'].services.email.send({
      to: 'afloode@gmail.com',
      from: 'flooder32@gmail.com',
      replyTo: 'no-reply@strapi.io',
      subject: 'Use strapi email provider successfully',
      text: 'Hello world!',
      html: 'Hello world!',
    });

    ctx.send({ok: true})
  }
};
